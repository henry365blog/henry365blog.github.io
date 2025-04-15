(function() {
  console.log("Search Script: Initializing..."); // Log 1

  // Get references to the elements
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');

  if (!searchInput) console.error("Search Script: searchInput element not found!");
  if (!resultsContainer) console.error("Search Script: resultsContainer element not found!");

  let searchData = null; // Variable to hold the search data
  let dataLoaded = false; // Flag to check if data is loaded
  const itemsPerPage = 10; // Number of results per page

  // --- 1. Fetch the search data ---
  function loadSearchData() {
    console.log("Search Script: Attempting to load search data..."); // Log 2
    fetch('/search.json') // Use clean, absolute path
      .then(response => {
        console.log("Search Script: Fetch response received, status:", response.status); // Log 3
        if (!response.ok) {
          throw new Error(`Network response was not ok for search.json (${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        searchData = data;
        dataLoaded = true;
        console.log(`Search Script: Search data loaded successfully. ${searchData ? searchData.length : 0} items found.`); // Log 4
        if (searchInput.value) {
          performSearch();
        }
      })
      .catch(error => {
        console.error('Search Script: Error loading search data:', error); // Log Error
        resultsContainer.innerHTML = '<p style="color: red; font-size: 0.9em;">Lỗi tải dữ liệu tìm kiếm!</p>';
      });
  }

  // --- 2. Perform the search ---
  function performSearch() {
    console.log("Search Script: performSearch called."); // Log 5
    if (!dataLoaded || !searchData) {
      console.log("Search Script: Search skipped, data not ready."); // Log 6
      return;
    }

    const query = searchInput.value.toLowerCase().trim();
    console.log(`Search Script: Query entered: "${query}"`); // Log 7
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query.length < 2) {
      console.log("Search Script: Query too short."); // Log 8
      if (query.length > 0) {
        resultsContainer.innerHTML = '<p style="font-size: 0.9em; color: #666;">Gõ thêm để tìm kiếm...</p>';
      }
      return;
    }

    console.log("Search Script: Filtering data..."); // Log 9
    const results = searchData.filter(item => {
      const titleMatch = item.title && item.title.toLowerCase().includes(query);
      const contentMatch = item.content && item.content.toLowerCase().includes(query);
      return titleMatch || contentMatch;
    });
    console.log(`Search Script: Found ${results.length} results.`); // Log 10

    displayPaginatedResults(results, query, 1); // Start displaying from page 1
  }

  // --- 3. Pagination Functions ---
  function paginateResults(results, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return results.slice(startIndex, endIndex);
  }

  function displayPaginatedResults(results, query, page) {
    const paginatedResults = paginateResults(results, page, itemsPerPage);
    const totalPages = Math.ceil(results.length / itemsPerPage);

    displayResults(paginatedResults, query);

    // Add pagination controls
    let paginationHtml = `<div style="margin-top: 20px; text-align: center;">`;
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<button onclick="displayPaginatedResults(window.searchResults, '${query}', ${i})" style="margin: 0 5px; padding: 5px 10px; border: 1px solid #ccc; background-color: ${i === page ? '#007bff' : '#fff'}; color: ${i === page ? '#fff' : '#000'}; cursor: pointer;">
                          ${i}</button>`;
    }
    paginationHtml += `</div>`;
    resultsContainer.innerHTML += paginationHtml;

    window.searchResults = results; // Store results globally for pagination
  }

  // --- 4. Display Results ---
  function displayResults(results, query) {
    console.log("Search Script: Displaying results."); // Log 11
    if (results.length === 0) {
      resultsContainer.innerHTML = `<p style="font-size: 0.9em; color: #666;">Không tìm thấy kết quả cho "${escapeHtml(query)}".</p>`;
      return;
    }

    let resultHtml = `<p style="font-size: 0.9em; color: #333; margin-bottom: 5px;">Tìm thấy ${results.length} kết quả:</p><ul>`;
    results.forEach(result => {
      resultHtml += `
        <li style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #eee;">
          <a href="${escapeHtml(result.url)}" style="font-weight: 600; display: block; margin-bottom: 4px; color: #007bff;">
            ${escapeHtml(result.title)}
          </a>
          <span style="font-size: 0.8em; color: #6c757d;">${escapeHtml(result.date)}</span>
        </li>
      `;
    });
    resultHtml += '</ul>';
    resultsContainer.innerHTML = resultHtml;
  }

  // --- Utility Function to Escape HTML ---
  function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- Debounce Function ---
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // --- Event Listener & Init ---
  if (searchInput && resultsContainer) {
    console.log("Search Script: Input and results container found. Loading data...");
    loadSearchData();
    searchInput.addEventListener('keyup', debounce(performSearch, 300));
    console.log("Search Script: Event listener attached.");
  } else {
    console.error("Search Script: Search input or results container not found on page load!");
  }

})(); // IIFE
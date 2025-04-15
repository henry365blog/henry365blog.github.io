# frozen_string_literal: true
source "https://rubygems.org"

# Sử dụng gem github-pages để cài Jekyll và các plugin được GitHub Pages hỗ trợ
# Đồng thời quản lý các plugin Jekyll khác tại đây
group :jekyll_plugins do
  gem "github-pages"
  gem 'jekyll-archives', '~> 2.1' # <-- Di chuyển vào đây
end

# Thêm các gem khác nếu cần sau này

# Improve file watching on Windows
gem 'wdm', '>= 0.1.0', :platforms => [:mingw, :mswin, :x64_mingw]

gem 'fiddle'
gem 'faraday-retry'
# Có thể thêm các gem cho môi trường development hoặc test ở đây nếu cần
# group :development, :test do
#   gem '...'
# end
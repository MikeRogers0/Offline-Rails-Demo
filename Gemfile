source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }
ruby '2.7.2'

gem 'barnes', '~> 0.0.8'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'image_processing', '~> 1.12'
gem 'lograge', '~> 0.11.2'
gem 'pg', '>= 0.18', '< 2.0'
gem 'premailer-rails', '~> 1.11'
gem 'puma', '~> 4.1'
gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
gem 'redis', '~> 4.2'
gem 'sass-rails', '>= 6'
gem 'sentry-raven', '~> 3.1'
gem 'sidekiq', '~> 6.1'
gem 'sidekiq-cron', '~> 1.2'
gem 'turbolinks', '~> 5'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'webpacker', '~> 5.2'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails', '~> 2.7'
  gem 'rspec-rails', '~> 4.0'
end

group :development do
  gem 'letter_opener', '~> 1.7'
  gem 'letter_opener_web', '~> 1.4'
  gem 'listen', '~> 3.2'
  gem 'rubocop', '~> 1.1', require: false
  gem 'rubocop-performance', '~> 1.9', require: false
  gem 'rubocop-rails', '~> 2.8', require: false
  gem 'rubocop-rspec', '~> 2.0', require: false
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

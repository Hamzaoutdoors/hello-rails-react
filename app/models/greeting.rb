class Greeting < ActiveRecord::Base
  validates :greeting, presence: true
end

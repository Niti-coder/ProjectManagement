class Product < ApplicationRecord
 belongs_to :user
 validates :name, presence: true
 validates :price, presence: true
 validates :description, presence: true

  require 'csv'

  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      self.create! row.to_hash
    end
  end

end

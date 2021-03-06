# == Schema Information
#
# Table name: locations
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  description     :string           not null
#  street_address1 :string           not null
#  street_address2 :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :integer          not null
#  lat             :float
#  lng             :float
#  owner_id        :integer          not null
#  archived        :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Location < ApplicationRecord

  include PgSearch
  multisearchable :against => [:title, :description, :zip, :lat, :lng]
  validates :title, :description, :lat, :lng, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :bookings,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Booking

  has_many :hostings,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Hosting

  has_many :pet_types,
    through: :hostings

  has_many :pets,
    through: :bookings

  has_many :reviews,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Review

  has_many :pictures, as: :imageable

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.search(search)
    locations = self.none
    search.each do |param|
      param = "%#{param}%"
      search_locations = self.where("lower(title) LIKE ? OR lower(city) LIKE ? OR lower(state) LIKE ?", param, param, param)
      locations = locations.or(search_locations)
    end
    locations
  end
end

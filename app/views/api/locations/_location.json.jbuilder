json.id location.id
json.title location.title
json.description location.description
json.lat location.lat
json.lng location.lng
json.owner_id location.owner_id
json.street_address1 location.street_address1
json.street_address2 location.street_address2
json.city location.city
json.state location.state
json.zip location.zip
json.archived location.archived
json.reviews location.reviews.length
json.rating location.reviews.map(&:rating).sum / location.reviews.length

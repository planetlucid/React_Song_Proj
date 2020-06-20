# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do
    Song.create([{
        title: Faker::Hipster.words,
        artist:Faker::FunnyName.two_word_name,
        album: Faker::Music.album,
        image_url: Faker::Placeholdit.image,
        genre:Faker::Types.rb_string,
        key:Faker::Music.key,
        mode: Faker::Types.rb_string,
        sales: Faker::Number.within(range: 1..100000000),
        streams:Faker::Number.within(range: 1..100000000),
        bpm: Faker::Number.within(range: 1..140),
        credits: Faker::Types.rb_string,
        structure:Faker::Types.rb_string,
    }])
end
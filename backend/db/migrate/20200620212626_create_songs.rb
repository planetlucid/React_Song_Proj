class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :image_url
      t.string :genre
      t.string :key
      t.string :mode
      t.string :sales
      t.string :streams
      t.float :bpm
      t.string :credits
      t.string :structure

      t.timestamps
    end
  end
end

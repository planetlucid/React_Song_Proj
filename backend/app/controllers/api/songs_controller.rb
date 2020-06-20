class Api::SongsController < ApplicationController

    before_action :set_song, only: [:show, :update, :destroy]

    def index
        render json: Song.all 
    end

    def create 
        song = Song.new(song_params)
        if song.save 
            render json: song
        else 
            render json: { message: song.errors }, status: 400
        end 
    end
    
    def show 
        render json: @song
    end

    def update 
        if @song.update(song_params)
            render json: @song
        else 
            render json: { message: @song.errors }, status: 400
        end
    end
    
    def destroy 
        if @song.destroy
            render status: 204
        else 
            render json: { message: "Unable to remove this song" }, status: 400
        end 
    end

    private

    def set_song 
        @song = Song.find_by(id: params[:id])
    end

    def song_params
        params.require(:song).permit(:title, :artist, :album, :image_url, :genre, :key, :mode, :sales, :streams, :bpm, :credits, :structure)
    end
end





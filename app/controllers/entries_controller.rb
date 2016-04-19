class EntriesController < ApplicationController

  def index
     @all = Entry.all
     random = rand(0..@all.length)
     binding.pry
     random_entry = @all[random]
     render json: {random_entry}
  end

  def new
   @entry = Entry.new
  end

  def create
    @entry = Entry.create(entry_params)
    redirect_to "/entries/index"
  end

  def show

  end

  private

  def entry_params
   params.require(:entry).permit(:name, :memory, :quote, :grateful, :learned)
  end
end

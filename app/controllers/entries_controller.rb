class EntriesController < ApplicationController

  def index

  end

  def new
   @entry = Entry.new
  end

  def create
    @entry = Entry.create(entry_params)
    redirect_to "/entries/index"
  end

  def show
    @all = Entry.all
    random = rand(0..@all.length)
    random_entry = @all[random]
    render json: random_entry

  end

  private

  def entry_params
   params.require(:entry).permit(:name, :memory, :quote, :grateful, :learned)
  end
end

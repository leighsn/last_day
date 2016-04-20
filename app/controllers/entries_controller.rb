class EntriesController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def new
   @entry = Entry.new
  end

  def create
    @entry = Entry.create(entry_params)
    redirect_to "/"
  end

  def show
    @all = Entry.all
    random = rand(0..@all.length)
    random_entry = @all[random]
    render json: random_entry
  end

  private

  def entry_params
   params.permit(:name, :memory, :quote, :grateful, :learned)
  end
end

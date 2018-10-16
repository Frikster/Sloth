class Api::UserChannelsController < ApplicationController
  def index
    @user_channels = UserChannel.all
    render :index
  end
end

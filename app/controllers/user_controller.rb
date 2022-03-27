class UserController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.create
    redirect_to edit_user_path(@user.id)
  end

  def edit
    @user = User.find_by(id: params[:id])
    @user.valid? if @user.created_at != @user.updated_at
  end

  def show

  end
end

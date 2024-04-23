class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  validates :email, allow_blank: true,
            format: { with: VALID_EMAIL_REGEX },
            uniqueness: true
end

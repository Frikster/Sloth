# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :author_id, :channel_id, :body, presence: true

  belongs_to :channel,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id

end

# == Schema Information
#
# Table name: chat_messages
#
#  id         :bigint(8)        not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#

class ChatMessage < ApplicationRecord
  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end

  has_one_attached :photo
  validates :author_id, :channel_id, presence: true
  validate :validate_content

  def validate_content 
    unless self.content || self.photo.attached?
      errors[:photo] << "must be attached for body to be nil"
    end
  end

  belongs_to :channel,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id
end

class ChatMessage < ApplicationRecord
  after_create_commit do
    ChatMessageCreationEventBroadcastJob.perform_later(self)
  end

  validates :author_id, :channel_id, :content, presence: true

  belongs_to :channel,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id
end

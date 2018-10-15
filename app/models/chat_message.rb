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

  validates :author_id, :channel_id, :content, presence: true

  belongs_to :channel,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id
end

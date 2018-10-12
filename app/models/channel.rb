# == Schema Information
#
# Table name: channels
#
#  id                     :bigint(8)        not null, primary key
#  author_id              :integer          not null
#  name                   :string           not null
#  direct_message_channel :boolean          default(FALSE), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :direct_message_channel, inclusion: { in: [true, false]}

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id,
  optional: true

  has_many :messages
end

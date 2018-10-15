# == Schema Information
#
# Table name: user_channels
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

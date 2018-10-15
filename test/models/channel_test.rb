# == Schema Information
#
# Table name: channels
#
#  id                     :bigint(8)        not null, primary key
#  author_id              :integer
#  name                   :string           not null
#  direct_message_channel :boolean          default(FALSE), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

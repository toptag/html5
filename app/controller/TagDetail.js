Ext.define('TopTag.controller.TagDetail', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            channelList: 'tagdetail dataview',
            mainDelete: 'main deletebutton',
            tagDetail: 'main tagdetail'

        },
        control: {
            channelList: {
                itemtap: 'channelTapped'
            },
            mainDelete: {
                tap: 'deleteTag'
            }
        }
    },

    channelTapped: function (list, index, target, record, e, eOpts) {
        var tagdetail = list.up('tagdetail'),
            channel = tagdetail.getChannels()[index],
            url = 'http://uk.toptag.com/EN/' + tagdetail.getTagid() + '/' + channel.N + '.json',
            tagDetail = this.getTagDetail();
        tagDetail.setMasked({
            xtype: 'loadmask',
            indicator: true
        });
        Ext.Ajax.request({
            url: url,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                var link = data.W;
                window.open(link, '_blank', 'location=yes');
            },
            failure: function () {
                console.log('Nope that didnt work');
            },
            callback: function () {
                tagDetail.setMasked(false);
            }

        });
    },

    deleteTag: function () {
        var that = this;
        Ext.Msg.confirm('Delete Tag Page', 'Do You Wish To Delete', function (buttonId, value, opt) {
            if (buttonId ===  'ok' || buttonId === 'yes') {
                var tagId = that.getTagDetail().getTagid();
                var tagStore = Ext.getStore('tagStore');
                var tagIndex = tagStore.find('tagid', tagId);
                tagStore.removeAt(tagIndex);
            }
        });

    }
});
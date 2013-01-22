Ext.define('TopTag.controller.Share', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            shareButton: 'tagdetail button'
        },
        control: {
            shareButton: {
                tap: 'shareTag'
            }
        }
    },

    shareTag: function (shareButton, e, eOpts) {
        var tagDetail = shareButton.up('tagdetail');
        var tagId = tagDetail.getTagid();
        var socialmessage = tagDetail.getSocialmessage();
        var title = tagDetail.getTitle();
        var shareMethod = shareButton.getId();
        if (this[shareMethod]) {
            this[shareMethod](tagId, title, socialmessage);
        }
    },

    facebook: function (tagId, title, socialmessage) {
        var link = 'http://www.facebook.com/sharer/sharer.php?u=http://www.toptag.me/969046783&t=Toptag+One+World+One+App';
        window.open(link, '_blank', 'location=yes');
    },

    twitter: function (tagId, title, socialmessage) {
        var link = 'https://twitter.com/intent/tweet?source=webclient&text=Get+amazing+content+on+Toptag+http://www.toptag.me/638937859';
        window.open(link, '_blank', 'location=yes');
    },

    sms: function (tagId, title, socialmessage) {
        window.plugins.emailComposer.sendSms(socialmessage);
    },

    email: function (tagId, title, socialmessage) {
        window.plugins.emailComposer.showEmailComposer(title, socialmessage, [], [], [], true, []);
    }

});
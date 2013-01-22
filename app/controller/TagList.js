/**
 * Controller for the tag list.
 */
Ext.define('TopTag.controller.TagList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            taglist: 'taglist',
            main: 'main',
            deleteButton: 'main deletebutton'
        },
        control: {
            taglist: {
                itemtap: 'taglistItemTapped'
            },
            main: {
                back: 'backButtonTapped'
            }
        }
    },
    
    taglistItemTapped: function (list, index, target, record, e, eOpts) {

        /**
         * Add a button to the navigation bar to allow deletion of the record.
         */
        this.getDeleteButton().show();


        /**
         * Add the appropriate detail view to the main navigation view.
         */
        this.getMain().push(Ext.merge({
            xtype: 'tagdetail'
        }, record.data, {
            titleBar: {
                items: [{
                    xtype: 'deletebutton'
                }]
            }
        }));
    },

    backButtonTapped: function (mainNavigationView, eOpts) {
         /**
         * Remove the delete button it is not necesary or relevant in the tag list view.
         */
        this.getDeleteButton().hide();
    }
});
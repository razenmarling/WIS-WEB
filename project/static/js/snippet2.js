$(document).ready(function(){
    window.countElementsIn = function(containerSel, patternSel) {
        var parentE = jQuery(containerSel);
        var parentCnt = parentE.length;
        if(parentCnt > 0) {
            return parentE.find(patternSel);
        }
        return 0;
    } 
    
    window.genInput = function(baseName,type,val,extraClass) {
        return '<input class="input form-control '+extraClass+'" name="'+baseName+'[]" type="'+type+'" value="'+val+'">';
    }
    
    window.genBtn = function(label,extraClass) {
        return '<button class="btn '+extraClass+'" >'+label+'</button></div>';
    }
    
    window.genNewRow = function(type,val) {
        switch(type) {
            default: 
                return '<div class="row-fluid record"><div class="span12">'+genInput('field','text',val)+' '+genBtn('-', 'btn-danger remove-parent')+'</div></div>';
        }
        console.log('Check your code Im broken...')
        return ''; // should never happen
    }
    jQuery(".add").on('click', function(e){
        e.preventDefault(); // prevents button weird behaviour
        var me = jQuery(this);
        var addTo = me.data('append-to') != undefined ? me.data('append-to') : "#container";
        var newType = me.data('append-type') != undefined ? me.data('append-type') : 'text'; // text is just default
        var newRec = genNewRow( newType, me.prev().val() );
        jQuery(addTo).append( newRec );
        me.prev().val(''); // wipe our value
        
        jQuery('.remove-parent').click(function(){
            e.preventDefault(); // prevents button weird behaviour
            jQuery(this).parent().remove();
        });
    });

    
});
	// Русские телефоны
    text = text.replace(/\+( |\xA0)?([0-9]{1,4})( |\xA0)?( |\xA0|-|−|–|—)?(\()?( |\xA0)?([0-9]{1,4})( |\xA0)?(\))?( |\xA0|-|−|–|—)?( |\xA0)?([0-9]{1,3})( |\xA0)?( |\xA0|−|–|—)?( |\xA0)?([0-9]{2})( |\xA0)?( |\xA0|−|–|—)?( |\xA0)?([0-9]{2})/g,"\+$2\xA0$5$7$9\xA0$12–$16–$20");
    text = text.replace(/(8)( |\xA0)?( |\xA0|−|–|—)?(\()?( |\xA0)?([0-9]{1,4})( |\xA0)?(\))?( |\xA0|−|–|—)?( |\xA0)?([0-9]{1,3})( |\xA0)?( |\xA0|−|–|—)?( |\xA0)?([0-9]{2})( |\xA0)?( |\xA0|−|–|—)?( |\xA0)?([0-9]{2})/g,"$1\xA0$4$6$8\xA0$11–$15–$19");
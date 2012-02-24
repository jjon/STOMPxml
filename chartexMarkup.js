var xmldoc = ''
    $(document).ready(function() { 
        $.ajax({  
            type: "GET",  
            url: "basexml.xml",  
            dataType: "xml",  
            success: parseXml  
        });
    
    function parseXml(oXML) {
        if (window.ActiveXObject) {
            return oXML.xml;
        } else {
            $("#showxml").text( (new XMLSerializer()).serializeToString(oXML) );
            xmldoc = oXML
        }
    }
    
    $(xmldoc).find('object_of_conveyance').text("foobar");
    
$("#but0").click(function(){
    start = $("#xmltesting").getSelection().start;
    end = $("#xmltesting").getSelection().end;
    $("#start").html(start);
    $("#end").html(end);
    

});

    
$("#but1").click(function(){
    //var lastChar = $("#xmltesting").text().length
    //$("#xmltesting").setSelection(0,lastChar)
    contents = $("#xmltesting").text()
    $(xmldoc).find('content').text(contents)
    $("#showxml").text((new XMLSerializer()).serializeToString(xmldoc))

});

    
$("#but2").click(function(){
    Object_of_Conveyance = $("#xmltesting").getSelection().text;
    start = $("#xmltesting").getSelection().start;
    end = $("#xmltesting").getSelection().end;
    $(xmldoc).find('object_of_conveyance').text(Object_of_Conveyance);
    $(xmldoc).find('object_of_conveyance').attr({'start':start, 'end':end})
    $("#showxml").text((new XMLSerializer()).serializeToString(xmldoc))

});

    
});

// Jon Combe saved me a lot of trouble: http://joncom.be/code/javascript-xml-conversion/
// the simple syntaxt for transforming xml objects to and from strings.

// function XMLToString(oXML) {
//   if (window.ActiveXObject) {
//     return oXML.xml;
//   } else {
//     return (new XMLSerializer()).serializeToString(oXML);
//   }
// }
// 
// function XMLFromString(sXML) {
//   if (window.ActiveXObject) {
//     var oXML = new ActiveXObject("Microsoft.XMLDOM");
//     oXML.loadXML(sXML);
//     return oXML;
//   } else {
//     return (new DOMParser()).parseFromString(sXML, "text/xml");
//   }
// }
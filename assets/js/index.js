
$('create').submit(function(event){
    alert('Data inserted successfully');
});


if(window.location.pathname == '/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        //if we want to use name instead
        // var name = $(this).attr("data_name");
        var id = $(this).attr("data_id");

        var request = {
            "url" : `http://localhost:5000/delete/${id}`,
            "method":"DELETE"
        }
        if(confirm(`Do you really want to delete this record with id ${id}?`)){   //confirm to give options to the user to either cancel or accept ()just like alert
            $.ajax(request).done(function(response){
                alert("Data deletd successfully!");
                location.reload();
            })
        }
    })
}

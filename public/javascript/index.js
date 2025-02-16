$("#new-post-button").on("click", function(){
    $("#new-post-button").addClass("hide");
    $("#new-post-form").removeClass("hide");

    $("#cancel-new-post").on("click", function(){
        $("#new-post-form").addClass("hide");
        $("#new-post-button").removeClass("hide");
    })
})

$(".edit-post-button").on("click", function (){
    const thisPostsIndex = this.id.substring(1);
    $("#form" + thisPostsIndex).removeClass("hide");
    $("#form" + thisPostsIndex + " .cancel-edit-post").on("click", function(){
        $("#form" + thisPostsIndex).addClass("hide");
    })
})
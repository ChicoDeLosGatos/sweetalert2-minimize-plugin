document.addEventListener("click", e => {
    if(e.target.className=='swal2-close' && e.target.id=="swal-minimize") {
        e.stopPropagation();
        e.preventDefault();
    $('#swal-minimized-text').html($("#swal2-title")[0].outerHTML);
    swal_minimize();
    }
}, true);

$('#swal-minimized').on('click', ev => {
  const e = ev.originalEvent;
  if(e.target.id !== "deminify-btn"){
    swal_maximize();
  }else{
    $('#swal-minimized').css('display', 'none');
    Swal.fire('Alert closed', 'Bye!', 'success');
    $('#swal-minimized-text').html('');
  }
});

function swal_minimize () {
    $('.swal2-container.swal2-center.swal2-backdrop-show').hide();
    $('#swal-minimized').css('display', 'flex');
  }

  function swal_maximize () {
    $('#swal-minimized').css('display', 'none');
    $('.swal2-container.swal2-center.swal2-backdrop-show').show();
    $('#swal-minimized-text').html('');
  }

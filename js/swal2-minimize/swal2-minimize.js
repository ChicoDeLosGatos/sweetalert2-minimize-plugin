document.addEventListener("click", e => {
    if(e.target.className=='swal2-close' && e.target.id=="swal-minimize") {
        e.stopPropagation();
        e.preventDefault();
    $('#swal-minimized-text').html($("#swal2-title")[0].outerHTML);
    swal_minimize();
    }
}, true);

export_styles();

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

  function export_styles() {
    const Styles = `
    #swal-minimized {
      display: none;
      height:40px;
      position: absolute;
      border-radius:10px; 
      filter: brightness(110%);
      bottom: 5px;
      left: 10px;
      z-index: 990;
      background-color: #c4c7ca; 
      cursor:pointer;
    }

    #swal-minimized:hover {
        filter: brightness(100%);
    }

    #swal-minimized:active {
        filter: brightness(95%);
    }

    #swal-minimize {
        display: flex; 
        position: relative;
        right:25px;
    }
  `;

    const style = document.createElement('style');
    style.textContent = Styles;
    document.head.append(style);
  }
  


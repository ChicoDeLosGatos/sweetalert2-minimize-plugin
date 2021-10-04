function swal_draw() {
    Swal.fire({
        title: `Hey World!`,
        text: `What's up?`,
        showCloseButton: true,
        didOpen: () => {
            setTimeout(() => {
                $('.swal2-popup.swal2-modal.swal2-show').prepend(`<button type="button" id="swal-minimize" class="swal2-close" aria-label="Minify this dialog">-</button>`);
            }, 100);
            // YOUR CODE
        },
    }).then((result) => {
        // YOUR CODE
    });
}

swal_draw();
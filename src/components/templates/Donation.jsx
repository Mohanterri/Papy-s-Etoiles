function Donation() {
  return (
    <>
        <template id="donation-form">
            <swal-title>
                Faire un don
            </swal-title>
            <swal-icon type="warning" color="red"></swal-icon>
            <swal-button type="confirm">
                Save As
            </swal-button>
            <swal-button type="cancel">
                Cancel
            </swal-button>
            <swal-button type="deny">
                Close without Saving
            </swal-button>
            <swal-param name="allowEscapeKey" value="false" />
            <swal-param
                name="customClass"
                value='{ "popup": "my-popup" }' />
            <swal-function-param
                name="didOpen"
                value="popup => console.log(popup)" />
        </template>
    </>
  )
}

export default Donation

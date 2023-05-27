export const FormularioPracticas = () => {
const estiloboton={
    margin_bottom:'18px',
}
const estiloaltura={
    height:'108px',
}
    const Formulario = () => {
        return (
            <>
            <div class="wrapper">
                <form action="">
                    <div id="wizard">     
                        <h4></h4>
                        <section>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Name"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Email"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Phone number"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="Street address"/> </div>
                        </section> 
                        <h4></h4>
                        <section>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="country"/> </div>
                            <div class="form-row"> <input type="text" class="form-control" placeholder="zip code"/> </div>
                            <div class="form-row" style= {estiloboton}> <textarea name="" id="" class="form-control" placeholder="Any order note about delivery or special offer"  style= {estiloaltura}></textarea></div>
                        </section>
                    </div>
                </form>    
            </div>            
            </>
        )
    }
    return (
        <>
            {Formulario()}

        </>
    )
}
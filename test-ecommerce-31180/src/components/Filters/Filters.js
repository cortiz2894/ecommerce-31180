import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Filters = () => {
    return(
        <div className="container-filters">
            <h4>Filtros</h4>
            <div className='filter-category'>
                <p className='filter-category__name'>Color</p>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Black</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Blue Indigo</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>White</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>Mostaza</span>
                </div>
            </div>
            <div className='filter-category'>
                <p className='filter-category__name'>Talle</p>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>XS</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>S</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>M</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>L</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>XL</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>XXL</span>
                </div>
            </div>
            <div className='filter-category'>
                <p className='filter-category__name'>Precio</p>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>$0 - $1500</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>$1500 - $2500</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>$2500 - $5000</span>
                </div>
                <div className='filter-item'>
                    <Checkbox {...label} size="small" color="default" />
                    <span>+$5000</span>
                </div>
            </div>
            <div>
                <button className='button-filter-submit'>Aplicar Filtros</button>
                <button className='button-filter-clean'>Borrar filtros</button>
            </div>
        </div>
    )
}

export default Filters
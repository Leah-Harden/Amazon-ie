

import DehazeIcon from '@mui/icons-material/Dehaze';

function Nav() {

    return (
        <>
            <div className='rowbottomNav'>

                <button className='AllBtnBottomNav'> <DehazeIcon className='AllIconBtn' />All</button>
                <div className=''>

                    <button size="small" className='BtnBottomNav'>Clinic</button>
                    <button size="small" className='BtnBottomNav'>Amazon Basics</button>
                    <button size="small" className='BtnBottomNav'>Buy Again</button>
                    <button size="small" className='BtnBottomNav'>Prime</button>
                    <button size="small" className='BtnBottomNav'>Groceries</button>
                    <button size="small" className='BtnBottomNav'>Pharmacy</button>

                    <button size="small" className='BtnBottomNav'>Pet Supplies</button>
                    <button size="small" className='BtnBottomNav'>Coupons</button>
                    <button size="small" className='BtnBottomNav'>Beauty & Personal Care</button>
                    <button size="small" className='BtnBottomNav'>Health & Household</button>
                    <button size="small" className='BtnBottomNav'>Shop By Interest</button>
                    <button size="small" className='BtnBottomNav'>Home Improvement</button>
                    <button size="small" className='BtnBottomNav'>Amazon Home</button>
                </div>
                <button size="small" className='BtnBottomNav'>Up to 50% overstock deals</button>

            </div>

        </>

    );
}

export default Nav;
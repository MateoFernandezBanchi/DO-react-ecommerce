import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
 
    return ( 
        <div className='container homeHero'>
    <div className='position-relative d-flex'>
            <img className='imgHomeHero' src="https://micasa10.com/wp-content/uploads/comprar-muebles-online-para-salon.jpg" alt=""  />
            <div className='position-absolute justify-content-center dataHomeHero'>
                <div><h2 className='homeTitle'>Mejora tu hogar en un click</h2></div>
                <div  className='buttonHome'>
                <Link to='./productos' className='buttonCount2'>Ver Productos</Link></div>
            </div>
    </div>
    <div >
        <h3 className='categoryTitle'>Categorías</h3>
        <div className='d-flex flex-wrap'>    
        <Link to='/productos/categoria/Cama'><div className='categoryCard'><h4 className='titleCategory'>Camas</h4>
            <img  className='imgCard' src="https://lh3.googleusercontent.com/yLKxi9dayifXlTmzRgslqx_Vjsnvdd968Z_zKHoVVsPM_qlYSLoWyLoxx2JTo4GL5h_NZ0_1KksZxx4dV92-8e2h_UtvC9MmY-OIb6t4lGvXmm_wPy1XFXG5yO2AwAywDls4H9Y5i6p9sV35vhZLdDoUJCfqTxQKEvI8wbKfoWqrhGzN29WV1ogL9t-RD5Pnqk8m9ZN5Hzaz-CtmAsianLcs-rlcIee3qxfq7W-WVYDrvQAmPixWrlPv_-C5tWKXTMTx_BQ0IBsRvh_nExZSSraC2kqCko5D7rOmfPI8Y_lo_71aUR5ann25dY8GAGXLfRgZttMiwPHwjE4yBnDah-BKUY-k9UCX8GSMw4cz-oteRUhTwv4W2_p4S53BtNFTsJTIwMk6q8qSoWAx53GxqcHavww3WGb4EKxtXL2Of2TqwdVwEI9tfNIFcTq3MYeolxM9uxlq2Uy35UOgWd0fHk-D28WDrlHoQCUZGerMw8O8H79A5VzX9ucfJQRVI_-d_xIS1FSLhc-cukD1l30oeq5F6aAk_-_ax1NfeBm28I9jEz9_LUeJQmgh7-AF3hUHUFyQppMTQGm-CxfePj4pyJ_To0atCM58EwZ-I0vwojEtjKlv3nq8iLiSOoykQM1-oSEGDo1hCJYfGWZaaKI4UYQ_G2wLA75Fs4QqpOkLd74koZ7T2E_JTB82LS3x22PPFsrGH3Rr98A37YewNJw2PEmz=w674-h600-no?authuser=0" alt="cama not found" /> </div></Link>
            <Link to='/productos/categoria/Escritorios'> <div className='categoryCard'><h4 className='titleCategory'>Escritorios</h4>
            <img className='imgCard' src="https://lh3.googleusercontent.com/KvQUGUUBQ8ps6e7yraQNOwDs2D6_HtqoTrL56CprVpDPsuxQMp_-MStpH2rJhKBDE3hQXNLI1mMCQQyCba7-y2NTpe9id1a95BgdzRZaFlb2c1p_ciCInXP1dt0zC552JVi0pdDvX70lfpIxuH8Zda_ppBpewc4nkOgEziyklc3tQ7Uf4SI50wekwrbiHcLAOUf63VviuZVjZkJzSjZEEwfRRpw6IRRp7JRPu4FzCxBJjQPLUquia5PVVGyTxinD2HOPfzDJdoKkc7jcz0ODAfGjZqHWgAGD-MB9ZiceI9VHpKxEkcev2R3zebVsI_FzNLVXL_Iuv8n__eaEyK0Q87uQBWD91IZ-e2llO3TS6mVhT4TpFKG0VawRm4sG708Y-Ke5_c1lVlqYHrRBuv5laHhJMUjqRMCvDRAhgEKRpw2iDa_PFVBEarhx9XuDG6ZP1bzFhFFkQS5fGtr_NJTjKRYOLqFmf2DlNTiSqmmEaSioeEqkNNLpqDtdZKB4sOTWGvohFp5etgxFP75eD1xrUOiGllQ5RiFMDvq4l9I-AosXy-NYzU2d0PXUkTwiy4v1oR8B2UD9wumTeLnq7Hgy9jk81H9mKCaDSs_273smwIkF-3EdA2S1R7mfM31HWqAe3CpA6jrIKogW8pcTfYsEmVRc6jHPX5JnG8JUnMEPARSMnEqHrjcM49uykDutorFhYvdLouVGLhIUuRbrPw5i-szB=w317-h159-no?authuser=0" alt="" /> </div></Link>
            <Link to='/productos/categoria/Placards'><div className='categoryCard'><h4 className='titleCategory'>Placards</h4>
            <img src="https://lh3.googleusercontent.com/1OxfSzXXhCWqs2F1N6KRs1eEQTHbMf-3-3bIJ_Q3rSqgNiemBFpFHjZIpjR_j6aR7L9GGD1tiCwGYCIEdxUpbA7VN0hKEy2NZl7qDBT6zAjgp4JIqKdSpOaMCnOaYsKXRlwbZGv90eQhFh6IiYO2NOki6zBhWikWGqL18p6hylNI-va94EHPrdg79UbJ-_4L-cm_B0FxOVOmB52DbgpHvk0hhqUjgdiBh6AMxaMgwRNxbYTMSXBtsaiWa6AaDR1W__VFTlJF7kLANBgztc14WrsIK6bM1yl-9IJ02d0uXonACQ4sTPNsSISBVN1b6phrdQ4snkVDXNSlIIC3nes0yy6iXpcBHkPTusfevEs5Gbwwy5Pbxudz5hpMdh3lZetWU2XQXjynGMzzJmiiznhAgSw0O4svltLiNikeDHrla-2r9m3D1owxR5-1lOih3WjTesgQ3-9SOcfDXGQlrDQdwcjdv6BjB-2RqackC50o5iSqh142vlz_BVJTDd9Ft8a556nWnGt4dTUOMg-MeBwON0cgEiTn5AI2F6eOzJ8TFaIOICmJCd7s0vU29PzSa671gcxSnSR9E06yoUaHf3KVtDT_LWlxOgQKiRtpnqfHW7NQM2RhmEhIdeBML2_Nr5jtULW3OqlviOnG7PaD3EI1bg6TCvC_Rsw_nclnwrVPCuMVA4zSMO2IblNA6m3of3TxVKJ3NzZAzMKs871o8hMZIvs3=w129-h183-no?authuser=0" alt="" /> 
            </div>
        </Link>        
        </div>
    </div>
    </div>
     );
}
 
export default Home;
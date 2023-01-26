import LoadingStyle from './loading.module.css'


export default function Loading(){
    return(
        <div className={LoadingStyle.loading_warp}>
        <div className={LoadingStyle.spinner}>
        <div className={LoadingStyle.rect1}></div>
        <div className={LoadingStyle.rect2}></div>
        <div className={LoadingStyle.rect3}></div>
        <div className={LoadingStyle.rect4}></div>
        <div className={LoadingStyle.rect5}></div>
        </div>
        </div>
        
    )
}
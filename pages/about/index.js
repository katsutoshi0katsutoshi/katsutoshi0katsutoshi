import Layout from "../../components/layout"
import MainNav from "../../components/mainnav"

export default function About(){
    return(
        <>
            <Layout>
            <div className="w-10/12 p-4">    
                <section>
                <h2 className="text-lg mb-2">プロフィールのテキスト</h2>
                <p>プロフィールテキストが入ります。プロフィールテキストが入ります。プロフィールテキストが入ります。プロフィールテキストが入ります。プロフィールテキストが入ります。プロフィールテキストが入ります。プロフィールテキストが入ります。</p>
                </section>
            <MainNav />
            </div>
            </Layout>
        </>
    )
}
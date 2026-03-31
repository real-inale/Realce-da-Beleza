import DressDetailClient from './DressDetailClient'
import { dresses } from '../../../lib/dresses'

type Props = { params: { id: string } }

export function generateStaticParams() {
  // #region agent log
  fetch('http://127.0.0.1:7710/ingest/ad6744e7-9db0-45c9-a5cf-f861a5ebc74f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36abe8'},body:JSON.stringify({sessionId:'36abe8',runId:'post-fix',hypothesisId:'H6',location:'src/app/vestidos/[id]/page.tsx:7',message:'generateStaticParams vestidos',data:{ids:dresses.map((d)=>d.id)},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  return dresses.map((dress) => ({ id: String(dress.id) }))
}

export default function DressDetailPage({ params }: Props) {
  return <DressDetailClient params={params} />
}

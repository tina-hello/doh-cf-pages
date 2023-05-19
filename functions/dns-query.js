const doh = 'https://security.cloudflare-dns.com/dns-query'
const dohjson = 'https://security.cloudflare-dns.com/dns-query'
const contype = 'application/dns-message'
const jstontype = 'application/dns-json'

export const onRequestGet = async ({request}) => {
	 const { method, headers, url } = request 
	 const searchParams = new URL(url).searchParams
	 if (searchParams.has('dns')) {
	 return await fetch(doh + '?dns=' + searchParams.get('dns'), {
            method: 'GET',
            headers: {
                'Accept': contype,
            }
        });
	 } else if (method== 'GET' && headers.get('Accept')==jstontype) {
        const search = new URL(url).search
         return await fetch(dohjson + search, {
            method: 'GET',
            headers: {
                'Accept': jstontype,
            }
        });
    } else {
        return new Response("", {status: 404})
    }

}

export const onRequestPost = async ({ request }) => {
	const { headers } = request 
  if (headers.get('content-type')==contype) {
        return fetch(doh, {
            method: 'POST',
            headers: {
                'Accept': contype,
                'Content-Type': contype,
            },
            body: request.body,
        });
		 } else {
        return new Response("", {status: 404})
    }
}

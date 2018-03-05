export function fetchData() {
	var url = ''
	return fetch(url, {
		method: 'GET'
	}).then(res => res.json())
}
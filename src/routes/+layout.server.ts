import type { LayoutServerLoad } from "../../.svelte-kit/types/src/routes/$types";

export const load: LayoutServerLoad = ({ locals: { locale } }) => {
	// pass locale information from "server-context" to "shared server + client context"
	return { locale }
}

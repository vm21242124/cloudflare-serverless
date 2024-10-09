

export default {
	async fetch(request, env, ctx): Promise<Response> {
		
		
		return Response.json({
			message:"Hi there"
		})
	},
} satisfies ExportedHandler<Env>;

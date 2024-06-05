import { context, getOctokit } from '@actions/github'
import { info, setFailed } from '@actions/core'

async function main() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = getOctokit(process.env.GITHUB_TOKEN)
  const { owner, repo } = context.repo

  try {
    const { data: issue } = await octokit.rest.issues.get({
      owner,
      repo,
      issue_number: 66573,
    })

    info(`Issue data = ${JSON.stringify(issue)}`)
  } catch (error) {
    setFailed(error)
  }
}

main()

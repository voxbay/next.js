import { context, getOctokit } from '@actions/github'
import { info, setFailed } from '@actions/core'

async function main() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = getOctokit(process.env.GITHUB_TOKEN)
  const { owner, repo } = context.repo
  let issue_number = 66573

  try {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number,
      body: 'Hello world!',
    })
  } catch (error) {
    setFailed(error)
  }
}

main()

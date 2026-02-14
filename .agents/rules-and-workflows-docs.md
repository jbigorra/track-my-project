# Rules and Workflows

Antigravity comes with a couple of customization options: Rules and Workflows.

**Rules** help guide the behavior of the agent. These are guidelines you can provide to make sure the agent follows as it generates code and tests. For example, you might want the agent to follow a certain code style, or to always document methods. You can add these as rules and the agent will take them into account.

**Workflows** are saved prompts that you can trigger on demand with /, as you interact with the agent. They also guide the behavior of the agent but they're triggered by the user on demand.

A good analogy is that Rules are more like system instructions whereas Workflows are more like saved prompts that you can choose on demand.

Both Rules and Workflows can be applied globally or per workspace and saved to the following locations:

Global rule: `~/.gemini/GEMINI.md`
Global workflow: `~/.gemini/antigravity/global_workflows/global-workflow.md`
Workspace rules: `your-workspace/.agent/rules/`
Workspace workflows: `your-workspace/.agent/workflows/`

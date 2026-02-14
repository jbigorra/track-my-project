# Antigravity Skills

Antigravity Skills solve this through Progressive Disclosure. A Skill is a specialized package of knowledge that sits dormant until needed. It is only loaded into the agent's context when your specific request matches the skill's description .

## Structure and Scope
Skills are directory-based packages. You can define them in two scopes depending on your needs:

- Global Scope (~/.gemini/antigravity/skills/): Available across all your projects (e.g., "Format JSON", "General Code Review") .
- Workspace Scope (<workspace-root>/.agent/skills/): Available only within a specific project (e.g., "Deploy to this app's staging", "Generate boilerplate for this specific framework") .

## The Anatomy of a Skill
A typical skill directory looks like this :

```
my-skill/
├── SKILL.md    #(Required) metadata & instructions.
├── scripts/    # (Optional) Python or Bash scripts for execution.
├── references/ # (Optional) text, documentation, or templates.
└── assets/     # (Optional) Images or logos.
```
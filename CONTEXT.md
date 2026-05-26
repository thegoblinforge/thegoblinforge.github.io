# Context

Glossary of the domain language used in this project. Implementation details belong in code or ADRs, not here.

## Terms

### The Goblin Forge (thegoblinforge)

A fictional one-person workshop / studio brand. It is a _place_, not a person. The site presents thegoblinforge as the workshop, and Renato as the smith working inside it.

- The workshop has an identity, an aesthetic, and a body of work.
- The smith ([[the-craftsman]]) is a distinct concept from the workshop itself.
- This separation lets the brand outlive any specific project and accommodate future collaborators without rewriting the identity.

### The Craftsman

Renato San Martin — the human behind thegoblinforge. Bio, background, and external links (LinkedIn, etc.) belong to the craftsman, not to the workshop. The craftsman has a dedicated page at `/craftsman` and a teaser section on the homepage.

A craftsman makes [[craft|crafts]]; the metaphor stays internally consistent.

### Craft

A piece of work produced in [[the-goblin-forge]]. The canonical noun for what other sites would call a "project." Used consistently in URLs (`/crafts/<slug>`), content collection names, section headings, and copy ("a craft of thegoblinforge", "View craft →").

- `app.puduchat.ai` is the first craft.
- Crafts belong to the workshop, not to the craftsman — framing is "thegoblinforge's crafts," not "Renato's projects."

#### Craft lifecycle

A craft is in one of three states:

- **active** — currently maintained. The default.
- **wip** — publicly listed but still being built; the smith is actively working on it.
- **archived** — no longer maintained, but kept on the site for historical value. The live link may or may not still work.

A craft may also be **featured**, which pins it above other crafts of the same status. Featuredness is independent of lifecycle state.

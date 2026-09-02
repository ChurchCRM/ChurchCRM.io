# ChurchCRM Visual Media Pipeline Specification

## Purpose

Build an automated system that keeps ChurchCRM marketing and documentation visuals current by provisioning the current application, seeding deterministic synthetic data, running documented Playwright workflows, capturing screenshots/videos, validating the results, and publishing machine-readable metadata.

The goal is simple:

> **Media is current with the release.**

Producing screenshots should not be a recurring manual chore.

## Why this exists

A website can have technically correct product claims while showing an outdated interface. That creates distrust and makes marketing maintenance expensive.

The media pipeline should make the real application the source of visual truth.

## Design principles

- Use the real ChurchCRM application.
- Never fabricate application UI with generative image tools.
- Use synthetic demonstration data only.
- Make workflows deterministic.
- Make artifacts reproducible.
- Tie every artifact to an application version.
- Make stale media detectable by automation.
- Make it obvious which workflow produced an asset.
- Keep marketing filenames stable where practical while storing version metadata separately.

## Architecture

The system has four major components:

1. **Provisioner** — creates a clean/current ChurchCRM environment.
2. **Seed data** — creates deterministic, realistic, non-sensitive demonstration data.
3. **Playwright workflows** — executes real user workflows and captures media.
4. **Media publisher** — validates, catalogs, and publishes artifacts with metadata.

The implementation should live close to CRM test/tooling infrastructure where practical. Marketing, documentation, and AI agents should consume the published outputs rather than own the test environment.

## Provisioning

The provisioner should be able to:

- provision a fresh supported environment
- install the target/current ChurchCRM release
- configure required runtime settings
- create a deterministic demo church
- seed synthetic people, families, groups, events, attendance, giving, volunteers, and other data required by workflows
- configure localization variants when needed
- expose a stable base URL to Playwright

The provisioning path should use a supported, repeatable installation method. Experimental deployment paths should not silently become the default capture environment.

## Deterministic demo data

Demo data should be:

- fictional
- obviously non-sensitive
- stable across runs
- realistic enough to make screenshots useful
- broad enough to exercise major workflows
- suitable for localization testing

Do not use real church member data, emails, phone numbers, addresses, donation records, or credentials.

## Workflow catalog

Each workflow is a maintained testable artifact with a purpose and expected output.

### People

- add-family
- manage-family
- manage-person
- search-people
- new-visitor-to-family

### Groups

- create-group
- add-people-to-group
- manage-group-leaders

### Events

- create-event
- event-attendance
- kiosk-checkin
- kiosk-checkout
- sunday-school

### Giving

- record-donation
- manage-pledge
- create-deposit
- donor-history
- financial-report

### Administration

- church-setup
- user-permissions
- backup-restore
- localization
- plugins

### Onboarding

- fresh-install
- first-run
- initial-church-setup
- import-data

### Responsive/mobile

Select representative workflows for desktop, tablet, and phone viewport validation.

## Workflow specification

Every workflow must document:

- workflow ID
- purpose
- user persona
- preconditions
- setup/state requirements
- synthetic data required
- steps
- expected result
- screenshots captured
- video captured
- output filenames/locations
- marketing uses
- documentation uses
- current vs roadmap status
- application version
- capture date
- locale
- viewport
- sensitive-data status

## Screenshots

Capture screenshots at meaningful state transitions, not every click.

A screenshot should communicate a user job or outcome. Examples:

- a family record showing useful information in context
- a group with members/leaders
- an event with attendance
- a kiosk check-in state
- a giving history/report
- a setup/localization screen

Avoid screenshots that are merely decorative.

## Videos

Prefer short workflow demonstrations over long product tours.

A video should answer one question such as:

- How do I add a family?
- How does event check-in work?
- How does a church record a donation?
- How do groups connect people to ministry?

The pipeline should capture a clean start/end state and avoid recording passwords, tokens, or irrelevant administration details.

## Artifact metadata

Every published asset should have machine-readable metadata containing at least:

- workflow
- ChurchCRM version
- capture date
- locale
- viewport
- asset type
- status (`current` or `historical`)
- synthetic-data confirmation
- source workflow
- checksum where appropriate

A simple manifest can support website builds, documentation, and AI agents.

## Current-media validation

The pipeline should make stale media obvious.

At minimum, validate:

- workflow completed successfully
- expected screenshots exist
- expected video exists when required
- files are non-empty and valid
- metadata is present
- captured version is recorded
- synthetic-data requirement is satisfied
- no forbidden sensitive-data patterns appear in generated output where automated checks are practical

Future versions can add visual regression comparison, but functional workflow success is the first requirement.

## Release integration

ChurchCRM releases should drive media refreshes.

### Weekly patch/fix release

Run:

- smoke workflows
- workflows affected by the release
- any media whose underlying UI changed

### Larger release

Run the full media suite and regenerate the complete current asset set.

The exact release cadence should remain configurable rather than hard-coded into the system.

## Change detection

The coding workflow should recognize when a UI or workflow changes.

Rule:

> If a UI/workflow change affects a maintained Playwright workflow, update that workflow and regenerate the affected media. Never hide the change or silently leave stale assets.

Potential detection signals include:

- changed templates/components
- changed selectors
- failed Playwright workflows
- changed routes
- changed screenshots expected by documentation
- changed localization strings

## Publishing model

Publish assets to a predictable location that can be consumed by:

- churchcrm.io
- official documentation
- social media content generation
- AI marketing agents
- release communications

The publisher should preserve stable logical asset IDs even when the underlying image/video is regenerated.

## Marketing agent integration

AI agents should request visuals by semantic workflow, not by guessing filenames.

Example:

> Need a current screenshot for `kiosk-checkin`, English, desktop.

The media catalog should return the current approved asset and its metadata.

Agents should not use historical media when current media is available unless the content explicitly discusses an older interface/release.

## Localization media

Where marketing priorities justify it, generate localized visual variants using the same deterministic workflow with:

- translated UI
- regional date formatting
- currency formatting
- timezone where relevant
- RTL layout where applicable

Do not create localized images merely to increase the language count. Prioritize languages/countries using the International Marketing Plan.

## Security and privacy

The media pipeline must never publish:

- real member data
- real donor information
- real credentials
- API tokens
- private URLs
- production databases
- private church information

Synthetic data should be the default and should be enforced where practical.

## Definition of done

The system is successful when a new/current ChurchCRM release can trigger a repeatable process that produces:

- current screenshots for maintained workflows
- current short workflow videos
- validated artifacts
- machine-readable metadata
- a clear indication of which media is current
- outputs available to marketing/documentation/AI agents

The key operational test is that updating ChurchCRM no longer requires a person to manually remember which screenshots need to be replaced.


The results of the instructions in the [App Creation Guide](./AppCreation.md) is a web and mobile application with branch based deployments.

# Git Flow Web

**Production Deployments**

Pushing to **main** will deploy to the production version of the vercel project. It will use project_prod.js.

The workflow can be found [here](../../.github/workflows/web-deploy-production.yml).

**Branch Based Deployments**

A PR from any other branch will deploy the branch to 2 urls, 1 that uses project_prod.js and another that uses project_dev.js.

Based on the feature branch named "my-feature" we could see 2 urls created

```shell
https://<repository>-<branch>.vercel.app/
https://<repository>-<branch>-prod.vercel.app/
```

Characters like / and _ get converted to - Example:

https://frontend-boilerplate-chores-docs.vercel.app/


The workflows can be found [here](../../.github/workflows/web-deploy-branch.yml) and [here](../../.github/workflows/web-deploy-branch-prod.yml).


# Git Flow Mobile

For mobile applications there are 2 types of deployments:

**Native Deployments** - A native version of the app, should be done when a new native module (or an update to one).
**CodePush Deployments** - An in-app update for a specific native version of the app, should be done when changes are just JavaScript related. A CodePush update can be a Staging update or Production update, internal users will have the ability to switch between staging and production (See [here](mobile/app/components/utility-components/CodePushUpdater.tsx)).

### Pushing to mobile/production/1.1.0

**Note - Pushing to this branch may fail the first time, this is because it has modified the native bundle versions, just push again.**
 
- If an AppCenter build from this branch doesn't exist it will create a **Native Build** with version 1.1.0
- If an AppCenter build from this branch does exist it will create a **Production CodePush Build** for version 1.1.0


### Pushing to mobile/staging/1.1.0
 
- If an AppCenter build from this branch doesn't exist it will create a **Native Build** with version 1.1.0
- If an AppCenter build from this branch does exist it will create a **Staging CodePush Build** for version 1.1.0

### Pushing to mobile/staging/1.1.0
 
- If an AppCenter build from this branch doesn't exist it will create a **Native Build** with version 1.1.0
- If an AppCenter build from this branch does exist it will create a **Production CodePush Build** for version 1.1.0

